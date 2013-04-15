crypto = require 'crypto'

name = 'euskode'

saySomethingByName = (name) ->
    console.log "#{name} at #{process.pid} says #{crypto.randomBytes(32).toString('hex')}"

saySomethingByName name
