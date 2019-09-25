class Api::V1::SubmissionsController < Api::V1::ApiController
  before_action :set_subreddit, only: :by_subreddit

  def show
    @submission = Submission.find(params[:reddit_fullname])

    render json: @submission, include: ["subreddit", "medium"]
  end

  def by_subreddit
    @submissions = Submissions::Search
                       .call(@subreddit.id, params[:sort])
                       .page(params[:page])
                       .per(40)

    render json: @submissions, include: [], meta: pagination_dict(@submissions)
  end

  private

    def set_subreddit
      @subreddit = Subreddit.find_by_display_name!(params[:display_name])
    end
end