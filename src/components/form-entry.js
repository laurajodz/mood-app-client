import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoodEntry from './mood-entry';
import SleepEntry from './sleep-entry';
import EatingEntry from './eating-entry';
import ExerciseEntry from './exercise-entry';
import NotesEntry from './notes-entry';
import ReviewEntry from './review-entry';
import Done from './done';

import StepZilla from 'react-stepzilla';

import './form-entry.css';
import './stepzilla.css';
import {addEntry} from "../actions";

export class FormEntry extends Component{

  saveEntry(step){
    if(step === 6) {
      this.props.dispatch(addEntry(this.props.newEntry));
    }
  }


   render() {
     const steps = [
       {name: 'Mood', component: <MoodEntry/>},
       {name: 'Sleep', component: <SleepEntry/>},
       {name: 'Eating', component: <EatingEntry/>},
       {name: 'Exercise', component: <ExerciseEntry/>},
       {name: 'Notes', component: <NotesEntry/>},
       {name: 'Review', component: <ReviewEntry/>},
       {name: 'Done!', component: <Done/>}
     ]

     var today = new Date().toDateString();


     return (

         <section className="form-entry">

           <section className="logoForm">
             Mood Today
           </section>

           <section>
             <h1>Daily Entry for</h1>
             <h2>{today}</h2>
           </section>

           <section className='step-progress'>
             <StepZilla
                 steps={steps}
                 prevBtnOnLastStep={false}
                 nextTextOnFinalActionStep={"Save Entry"}
                 onStepChange={(step) => this.saveEntry(step)}
             />
           </section>

         </section>

     );
   }

}


const mapStateToProps = state => ({
   newEntry: state.entry.newEntry
});

export default connect(mapStateToProps)(FormEntry);

