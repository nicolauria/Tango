import WebCanvas from './web_canvas'
import {connect} from 'react-redux'
import {openModal} from '../../actions/modal_actions'
// we might want a different type of modal to open up when we do this

const mapStateToProps = (state, ownProps) => {
    return({
        project: state.entities.projects[ownProps.match.params.projectId],
        // tasks: ownProps.project.tasks
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        openModal: (modal) => dispatch(openModal(modal))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(WebCanvas)