import React, { useState } from "react";
import { ApiClient } from 'ApiClient';
import { Helmet } from "react-helmet-async";
import InfiniteScroll from "react-infinite-scroller";
import {
    LoadingIndicator,
    MaxWidthContainer,
    SectionHeader,
    SubmissionList
} from "components";

export default function Trending() {
    const [data, setData] = useState({ submissions: [], hasMore: true, page: 1 });
    const client = new ApiClient();

    async function fetchSubmissionsData() {
        const params = { max_results: 40, page: data.page };
        await client.get("/api/v1/recommended_submissions/", { params: params })
            .then((response) => {
                const newData = {
                    submissions: [...data.submissions, ...response.data.submissions],
                    page: data.page + 1,
                    hasMore: response.data.meta.next_page != null
                };
                setData(newData);
            })
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Trending Videos</title>
            </Helmet>
            <MaxWidthContainer>
                <SectionHeader headerText="Trending Videos" />
                <InfiniteScroll
                    initialLoad={true}
                    loadMore={fetchSubmissionsData}
                    hasMore={data.hasMore}
                    loader={<LoadingIndicator key="loadingIndicator" show={true} />}
                >
                    <SubmissionList
                        submissions={data.submissions}
                        searchState={{}}
                        showSubreddits={true}
                    />
                </InfiniteScroll>
            </MaxWidthContainer>
        </React.Fragment>

    );
}
