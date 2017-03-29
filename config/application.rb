require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module CvMaker
  class Application < Rails::Application
    config.to_prepare do
      DeviseController.respond_to :html
    end
    config.assets.precompile += ["admin.scss", "admin.js"]
    config.middleware.use PDFKit::Middleware
  end
end
