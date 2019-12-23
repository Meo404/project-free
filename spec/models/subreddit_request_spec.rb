# == Schema Information
#
# Table name: subreddit_requests
#
#  id              :bigint           not null, primary key
#  comment         :text
#  display_name    :string
#  reddit_fullname :string
#  status_cd       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_id         :bigint
#
# Indexes
#
#  index_subreddit_requests_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

describe SubredditRequest do
  describe 'validations' do

    it { should belong_to(:user) }

    context 'when was created' do
      subject { build :subreddit_request }
      it { should validate_presence_of(:reddit_fullname) }
      it { should validate_presence_of(:display_name) }
      it { is_expected.to validate_uniqueness_of(:reddit_fullname).scoped_to(:user_id) }
    end
  end
end
