import { connect } from 'react-redux';
import { makeSelectClaimForUri, doSearch, makeSelectRecommendedContentForUri } from 'lbry-redux';
import RecommendedVideos from './view';

const select = (state, props) => ({
  claim: makeSelectClaimForUri(props.uri)(state),
  recommendedContent: makeSelectRecommendedContentForUri(props.uri)(state),
});

const perform = dispatch => ({
  search: query => dispatch(doSearch(query, 20, undefined, true)),
});

export default connect(
  select,
  perform
)(RecommendedVideos);
