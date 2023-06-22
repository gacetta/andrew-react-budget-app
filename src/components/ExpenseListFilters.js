import React from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../actions/filters";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === "date") this.props.sortByDate();
    else if (e.target.value === "amount") this.props.sortByAmount();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="start-date"
          endDate={this.props.filters.endDate}
          endDateId="end-date"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

// const ExpenseListFilters = (props) => (
//   <div>
//     <input
//       type="text"
//       value={props.filters.text}
//       onChange={(e) => {
//         props.dispatch(setTextFilter(e.target.value))
//       }}
//     />
//     <select
//       value={props.filters.sortBy}
//       onChange={(e) => {
//         if (e.target.value === 'date') props.dispatch(sortByDate());
//         else if (e.target.value === 'amount') props.dispatch(sortByAmount());
//       }}
//     >
//       <option value='date'>Date</option>
//       <option value='amount'>Amount</option>
//     </select>
//   </div>
// );

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    startSetDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  };
};

export const ConnectedExpenseListFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
