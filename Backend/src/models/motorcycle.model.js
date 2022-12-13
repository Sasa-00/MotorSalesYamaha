// Motorcycle-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'motorcycle';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    ModelName: { type: String, required: true },
    Slogan: { type: String },
    CategoryImg: { type: String },
    FirstImg: { type: String },
    Text: [{ type: String }],
    SecondImg: { type: String },
    Details: [{ type: String }],
    ThirdImg: { type: String },
    CharTitleOne: { type: String },
    CharTextOne: { type: String },
    CharTitleTwo: { type: String },
    CharTextTwo: { type: String },
    CharTitleThree: { type: String },
    CharTextThree: { type: String }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
