class BaseService {

  async run() {
    throw new Error('Error, method not implemented.');
  }
  
}

module.exports = BaseService;