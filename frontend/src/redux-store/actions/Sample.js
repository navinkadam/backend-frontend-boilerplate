import {
  postDataToService,
  getDataToService,
  deleteDataToService,
} from "../../utils/serviceUtil";

export function sampleAction(data, dispatch) {
  return {
    type: "SAMPLE_ACTION",
    payload: new Promise(async (resolve, reject) => {
      try {
        resolve({ data: "Sample action called" });
      } catch (error) {
        reject({ message: "Reject function called1" });
      }
    }),
  };
}
