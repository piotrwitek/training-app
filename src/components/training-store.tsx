export class TrainingStore {
  state: TrainingModel[] = initialState;

  removeItem = (uid: number) => {
    let newState = this.state.filter((item) => item.uid !== uid);

    this.state = newState;
  }

  addItem = (title: string, description: string) => {
    let newItem = new TrainingModel(title, description);

    this.state.push(newItem);
  }

  editItem = (uid: number, title: string, description: string) => {
    let existingItem = this.state.find(item => item.uid === uid);
    if (existingItem == null) return;

    existingItem.title = title;
    existingItem.description = description;
  }

}

let counter = 0;

export class TrainingModel {
  uid: number = counter++;
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

const initialState: TrainingModel[] = [
  new TrainingModel('fake training 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'),
  new TrainingModel('fake training 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'),
  new TrainingModel('fake training 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.')
];
