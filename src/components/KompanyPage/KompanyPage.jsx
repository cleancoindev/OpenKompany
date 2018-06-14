import React from 'react';
import { connect } from 'react-redux';
import { getKompany } from '../../actions/kompanyActions';

import PageHeader from '../PageHeader/PageHeader';
import Tabs from '../Tabs/Tabs';
import TabButton from '../Tabs/TabButton/TabButton';
import Footer from '../Footer/Footer';

import './KompanyPage.scss';

class KompanyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'home',
      isPaymentsInTab: true,
    };

    this.setActiveTab = this.setActiveTab.bind(this);
    this.changePayments = this.changePayments.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.id || null;
    this.props.getKompany(id);
  }

  setActiveTab(tab) {
    this.setState({
      activeTab: tab,
    });
  }

  changePayments() {
    this.setState({
      isPaymentsInTab: !this.state.isPaymentsInTab,
    });
  }

  render() {
    const { kompany } = this.props;
    const { activeTab, isPaymentsInTab } = this.state;

    const tabs = ['home', 'team', 'transactions', 'payments'];

    return (
      <div>
        <PageHeader
          companyName={kompany.data.companyName}
          description={kompany.data.description}
        />

        <div className="triangle-background">
          <div className="container">
            <div className="tabs-wrapper">
              {
                tabs.map(tab => (
                  <TabButton
                    tab={tab}
                    activeTab={activeTab}
                    onClick={this.setActiveTab}
                    isPaymentsInTab={isPaymentsInTab}
                    changePayments={this.changePayments}
                  />
                ))
              }
            </div>
            <Tabs tab={activeTab} kompany={kompany} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  kompany: state.kompany,
});

const mapDispatchToProp = { getKompany };

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(KompanyPage);