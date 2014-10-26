require 'sinatra'
require 'sinatra/base'
require 'sinatra/content_for'

Dir.glob('./controllers/*.rb').each { |file| require_relative file }

class Hi < Sinatra::Base
  helpers Sinatra::ContentFor
  
  configure do
    set :root, File.dirname(__FILE__)
  end
  
  run! if __FILE__ == $0
end
