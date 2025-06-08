class TaskService {
  static validateTaskData(data) {
    if (
      !data.title ||
      !data.description ||
      !data.status_id ||
      !data.priority_id ||
      !data.category_id ||
      !data.conclusion_date
    ) {
      return false;
    }
    return true;
  }
}

module.exports = TaskService;
