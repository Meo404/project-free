import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { ApiClient } from 'ApiClient';
import { Helmet } from "react-helmet-async";
import InfiniteScroll from "react-infinite-scroller";
import {
    LoadingIndicator,
    MaxWidthContainer,
    NoResultsBox,
    SubmissionList,
    SubredditHeader
} from "components";

const INITIAL_STATE = {
    submissions: [],
    sortMethod: "hot",
    hasMore: false,
    nextPage: 1,
    initialLoad: true
};

export default function Subreddit() {
    const [data, setData] = useState(INITIAL_STATE);
    const [subreddit, setSubreddit] = useState(null);
    const displayName = useParams().displayName;
    const client = new ApiClient('/', true);

    useEffect(() => {
        setSubreddit(null);
        setData(INITIAL_STATE);
        fetchSubredditData();
        fetchSubmissionData(null, "hot");
    }, [displayName]);

    async function fetchSubredditData() {
        await client.get("/api/v1/subreddits/" + displayName)
            .then((response) => {
                setSubreddit(response.data.subreddit);
            })
    }

    /**
     * This function is fetching submissions for the view
     * 
     * It will use both params to detect which operation it should run:
     * If infiniteScrollPage is passed we assume that we need to fetch more data if data.hasMore returns true.
     * If sortMethod is passed we assume that we need to fetch a new set of submissions.
     * 
     *  @param infiniteScrollPage   - passed page by infinite-scroller
     *  @param sortMethod           - passed if we want to change sorting
     */
    async function fetchSubmissionData(infiniteScrollPage = null, sortMethod = null) {
        // Prevents unneccessary first load of the infinite-scroller
        if (infiniteScrollPage && !data.hasMore) { return; }

        // Setting request params
        const sortParam = sortMethod ? sortMethod : data.sortMethod
        const pageParam = sortMethod ? 1 : data.nextPage
        // Request data and update state accordingly
        const params = { sort: sortParam, page: pageParam }
        await client.get("/api/v1/submissions/" + displayName, { params: params })
            .then((response) => {
                const submissions = sortMethod ? [] : [...data.submissions]
                const updatedData = {
                    submissions: [...submissions, ...response.data.submissions],
                    sortMethod: sortParam,
                    nextPage: response.data.meta.next_page,
                    hasMore: response.data.meta.next_page != null,
                    initialLoad: false
                }

                setData(updatedData);
            })
    }

    function handleSortChange(event) {
        setData(INITIAL_STATE);
        fetchSubmissionData(null, event.target.value);
    }

    function isEmptyResultSet() {
        return data.submissions.length === 0 && !data.initialLoad
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{displayName}</title>
            </Helmet>
            <MaxWidthContainer>
                {subreddit ? (
                    <SubredditHeader
                        subreddit={subreddit}
                        sortMethod={data.sortMethod}
                        sortChangeHandler={handleSortChange}
                    />
                ) : null}
                <InfiniteScroll
                    initialLoad={false}
                    loadMore={fetchSubmissionData}
                    hasMore={data.hasMore}
                    loader={<LoadingIndicator key="loadingIndicator" show={true} />}
                >
                    <SubmissionList
                        submissions={data.submissions}
                        searchState={{ sortMethod: data.sortMethod }}
                    />
                    <LoadingIndicator key="loadingIndicator" show={data.initialLoad} />
                </InfiniteScroll>
                {isEmptyResultSet() ? (
                    <NoResultsBox
                        headerText="No videos found"
                        descriptionText="Try changing your sorting filter or visit another subreddit!"
                    />
                ) : null}
            </MaxWidthContainer>
        </React.Fragment>
    );
}
