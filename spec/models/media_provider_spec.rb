# == Schema Information
#
# Table name: media_providers
#
#  id               :bigint           not null, primary key
#  base_embed_url   :string
#  has_meta_data    :boolean          default(FALSE)
#  name             :string
#  status_cd        :integer          default(0)
#  url              :string
#  url_parser_class :string
#  url_patterns     :string           is an Array
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'rails_helper'

describe MediaProvider do
  describe 'validations' do
    context 'when was created' do
      subject { build :media_provider }
      it { should validate_uniqueness_of(:name) }
      it { should validate_presence_of(:name) }
      it { should validate_presence_of(:base_embed_url) }
      it { should validate_presence_of(:url) }
      it { should validate_presence_of(:url_patterns) }
      it { should validate_presence_of(:url_parser_class) }
      it { should validate_url_of(:base_embed_url) }
      it { should validate_url_of(:url) }
    end
  end
end
