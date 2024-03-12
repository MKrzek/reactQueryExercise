
import { useQuery } from 'react-query';
import {GoIssueOpened, GoIssueClosed} from 'react-icons/go'

function IssueItem (props){
    const {
        number,
        assignee,
        commentCount,
        key,
        title,
        status
    } = props
    return <li>
        <div>
            {status==='done'|| status=='cancel'}
        </div>
    </li>
}
export default function IssuesList() {

    const issuesQ = useQuery(['issues'], ()=>fetch('/api/issues').then(res=>res.json))


  return (
    <div>
      <h2>Issues List</h2>
     { issuesQ.isLoading
     ? <p>Loading...</p>
     :<ul>
        {issuesQ.data.map(issue=><IssueItem
        number={issue.number}
        assignee={issue.assignee}
        commentCount={issue.comments.length}
        key={issue.id}
        title={issue.title}
        {...issue}
         />)}
      </ul>
}
    </div>
  );
}
