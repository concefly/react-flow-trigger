const { React } = require('react');

class FlowTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    this.listenScroll();
    this.onScroll();
  }
  componentWillUnmount() {
    this.removeScroll();
  }
  get triggerOffset() {
    return this.props.offset || 0;
  }
  listenScroll() {
    window.addEventListener('scroll', this.onScroll);
  }
  removeScroll() {
    window.removeEventListener('scroll', this.onScroll);
  }
  checkExpose() {
    const vpOffsetY = this.refs.trigger.getBoundingClientRect().top;
    const vpHeight = window.innerHeight;
    return vpHeight - vpOffsetY > this.triggerOffset;
  }
  onScroll() {
    if (this.props.enable && this.checkExpose()) {
      this.props.onTrigger();
    }
  }
  render() {
    const { children } = this.props;
    return (
      <div ref="trigger">
        {children}
      </div>
    );
  }
}
FlowTrigger.propTypes = {
  offset: React.PropTypes.number,
  children: React.PropTypes.element,
  enable: React.PropTypes.bool.isRequired,
  onTrigger: React.PropTypes.func.isRequired,
};

module.exports = FlowTrigger;
