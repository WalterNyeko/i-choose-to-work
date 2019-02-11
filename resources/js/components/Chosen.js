import React from 'react';
import $ from 'jquery';
import chosen from 'chosen-js';


class Chosen extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.chosen({max_selected_options: 5});

    this.handleChange = this.handleChange.bind(this);
    this.$el.on('change', this.handleChange);
  }
  
  componentWillUnmount() {
    this.$el.chosen('destroy');
  }
  handleChange(e) {
      var options = e.target.options;
      var value = [];
      for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
              value.push(options[i].value);
          }
      }
      this.props.onChange(value);
    //   this.props.onChange(e.target.value);
  }
  
  render() {
    return (
      <div>
        <select className="Chosen-select form-control" ref={el => this.el = el} multiple>
          {this.props.children}
        </select>
      </div>
    );
  }
}

export default Chosen;