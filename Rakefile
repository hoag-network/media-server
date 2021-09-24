require 'yaml'
require 'base64'
require 'erb'
require_relative './lib/mods/renderer'

CONFIG_PATH = 'config/app.yml'.freeze
UTILS_PATH = 'config/utils.yml'.freeze

@config = YAML.load_file(CONFIG_PATH)
#@utils = YAML.load_file(UTILS_PATH)

# Add your own tasks in files placed in lib/tasks ending in .rake
Dir.glob('./lib/tasks/*.rake').each do |task|
  puts "Loading"
  load task
end

task :render do
  puts "Iniciando render"
  renderer = Mods::Renderer.new
  renderer.render
end
