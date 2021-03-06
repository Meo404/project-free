describe 'GET api/v1/favorite_submissions', type: :request do
  # API CONFIG uses low amounts for testing purposes
  # Check config/api_config.yml for adjustments
  let(:default_results) {
    Rails.configuration.api_config.dig(:favorite_submissions, :index, :default_results).to_i
  }

  before :each do
    user = create(:user)
    media_provider = create(:media_provider)

    10.times do
      subreddit = create(:subreddit)
      submission = create(:submission, subreddit: subreddit)
      create(:medium, submission: submission, media_provider: media_provider)
      create(:favorite_submission, user: user, submission: submission)
    end
  end

  context 'when authenticated' do
    let(:user) { User.first }
    let(:auth_headers) { user.create_new_auth_token }

    it 'returns a successful response' do
      get "/api/v1/favorite_submissions/", headers: auth_headers, as: :json
      expect(response).to have_http_status(:success)
    end

    it 'returns the default amount of submissions' do
      get "/api/v1/favorite_submissions", headers: auth_headers, as: :json
      expect(JSON.parse(response.body)["submissions"].size).to eq(default_results)
    end

    it 'returns submission favorites by the user' do
      get "/api/v1/favorite_submissions", headers: auth_headers, as: :json
      expect(
          JSON.parse(response.body)["submissions"].map { |s| s["reddit_fullname"] }
      ).to eq(user.submissions.limit(default_results).map(&:reddit_fullname))
    end
  end

  context 'when not authenticated' do
    it 'returns a unauthorized response' do
      get "/api/v1/favorite_submissions/",  as: :json
      expect(response).to have_http_status(:unauthorized)
    end
  end
end