import WebCanvas from './web_canvas'
import {connect} from 'react-redux'
import {openModal} from '../../actions/modal_actions'
import {fetchProject} from '../../actions/projects_actions'
// we might want a different type of modal to open up when we do this

const mapStateToProps = (state, ownProps) => {
    
    return({
        // projectId: ownProps.match.params.projectId,
        project: ownProps.project,
        // tasks: ownProps.project.tasks
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        openModal: (modal) => dispatch(openModal(modal))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(WebCanvas)