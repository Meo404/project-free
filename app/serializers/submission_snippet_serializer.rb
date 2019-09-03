class SubmissionSnippetSerializer < ActiveModel::Serializer
  attributes :author,
             :comment_count,
             :created_utc,
             :media_provider,
             :score,
             :title,
             :thumbnail,
             :thumbnail_size

  def media_provider
    object.medium.media_provider.name
  end
end
