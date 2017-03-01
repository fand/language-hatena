{CompositeDisposable} = require 'atom'
md2hatena = require './md2hatena'

module.exports =
  subscriptions: null

  activate: ->
    @subscriptions = new CompositeDisposable
    @subscriptions.add atom.commands.add 'atom-workspace',
      'language-hatena:convert-markdown-to-hatena': => @convert()

  deactivate: ->
    @subscriptions.dispose()

  convert: ->
    md2hatena(atom)
