# generated with rails g controller set up with rails API
# but isn't an api call, want to render html page
# class StaticController < ApplicationController
#   def index
#   end
# end

require 'rails/application_controller'

class StaticController < Rails::ApplicationController
  layout false

  def index
    render file: Rails.root.join('public', 'index.html')
  end
end