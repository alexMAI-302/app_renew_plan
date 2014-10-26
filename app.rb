require_relative './config/init.rb'

Dir.glob('./controllers/*.rb').each { |file| require_relative file }

class App < Sinatra::Base
  helpers Sinatra::ContentFor

  configure do
    set :root, File.dirname(__FILE__)
    enable :logging
    file = File.new("#{settings.root}/log/#{settings.environment}.log", 'a+')
    file.sync = true
    use Rack::CommonLogger, file
    
    set :session_secret, 'super secret'
    use Rack::Session::Cookie, :secret => "some unique secret string here"
    use Rack::Csrf, :raise => true
  end
  
  run! if __FILE__ == $0
end
