RSpec.describe DeleteUnconfirmedUsersJob, type: :job do
  subject(:job) { described_class.perform_later }

  it "enqueues job to delete unconfirmed users" do
    ActiveJob::Base.queue_adapter = :test

    expect { job }.to have_enqueued_job(described_class).on_queue("regular_updates")
  end
end
