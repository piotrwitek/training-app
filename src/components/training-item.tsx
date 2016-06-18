import * as React from 'react';
import {TrainingStore, TrainingModel} from './training-store';

interface IProps {
  data: TrainingModel;
  onRemove: any;
  onEdit: any;
}

interface IState {
  isEditMode?: boolean;
}

export class TrainingItem extends React.Component<IProps, {}> {
  state: IState = {
    isEditMode: false
  }

  descriptionRef: HTMLTextAreaElement;
  initDescriptionRef = (ref) => this.descriptionRef = ref;
  titleRef: HTMLInputElement;
  initTitleRef = (ref) => this.titleRef = ref;

  handleRemove = (): void => {
    this.props.onRemove(this.props.data.uid);
  }

  handleEdit = (): void => {
    this.setState({ isEditMode: !this.state.isEditMode });
  }

  handleSave = (): void => {
    this.props.onEdit(this.props.data.uid, this.titleRef.value, this.descriptionRef.value);
    this.setState({ isEditMode: false });
  }

  handleCancel = (): void => {
    this.titleRef.value = this.props.data.title;
    this.descriptionRef.value = this.props.data.description;
    this.setState({ isEditMode: false });
  }

  render() {
    return <div className="column is-one-third ">
    <div key={this.props.data.uid}  className="card is-fullwidth">
    <header className="card-header">
      <input ref={this.initTitleRef}
        type='text'
        className={this.state.isEditMode ? "card-header-title" : "card-header-title title__text--readonly"}
        defaultValue={this.props.data.title}
        readOnly={!this.state.isEditMode}
        />
      </header>
    <div class="card-content">
      <textarea ref={this.initDescriptionRef}
          className={this.state.isEditMode ? "content textarea" : "content textarea description__text--readonly"}
        defaultValue={this.props.data.description}
        readOnly={!this.state.isEditMode}
        />
      </div>
    <div className="card-footer">
            <a className='card-footer-item button is-success' type='button' onClick={this.state.isEditMode ? this.handleSave : this.handleEdit}>
              {this.state.isEditMode ? 'Save' : 'Edit'}
            </a>
      
            <a className='card-footer-item button is-danger' type='button' onClick={this.state.isEditMode ? this.handleCancel : this.handleRemove}>
              {this.state.isEditMode ? 'Cancel' : 'Remove'}
            </a>
 
      </div>
    </div>
    </div>
  }
};
