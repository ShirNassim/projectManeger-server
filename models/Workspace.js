const mongoose = require('mongoose')
 ,Base = require('./Base');

const WorkspaceSchema = Base.discriminator('Workspace', mongoose.Schema({
    
}))

module.exports = mongoose.model('Workspace')