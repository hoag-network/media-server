require_relative '../mods/renderer'

namespace :render do
  desc 'Render configuration and compose files and keys'
  task :config do
    renderer = Mods::Renderer.new
    renderer.render
  end
end
