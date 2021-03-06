import * as actionTypes from '../constants/actionTypes';

const initialState = {
    currentRegion: '',
    regionData: {},
    activeNode: '',
    fetching: false,
    fetched: false,

}

// should possibly rename this reducer
const graphReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {

      case actionTypes.GET_AWS_INSTANCES_START:{
        console.log('starting AWS fetch')
        return {
          ...state,
          fetching:true,
          fetched: false
        }
      }

      case actionTypes.GET_AWS_INSTANCES_FINISHED:{
        console.log('finishing AWS fetch');
        return {
          ...state,
          fetching:false,
          fetched: true
        }
      }

      case actionTypes.GET_AWS_INSTANCES: {
        return {
          ...state,
          regionData: JSON.parse(action.payload.regionState),
          currentRegion: action.payload.currentRegion
        }
      }
      case actionTypes.NODE_DETAILS: {
        const VPC = action.payload[3];
        const availabilityZone = action.payload[2];
        const instanceType = action.payload[1];
        const instanceId = action.payload[0];
        const nodeData = state.regionData[VPC][availabilityZone][instanceType][instanceId];
        console.log("THE NODE DATA ", state.regionData);
        return {
          ...state,
          activeNode: nodeData
        }
      }
      default: return state;
    }
}

export default graphReducer;