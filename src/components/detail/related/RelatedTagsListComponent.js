
import { Link } from 'react-router-dom';
import { getSlugTag } from '../../../helpers/Helper';
export const RelatedTagsListComponent = props => {
    const tags = props.tags;
    return (
        <>
            <ul class="list-tag">
                <li>Tags: </li>
                {
                    tags.map(tag => <li><Link  to={getSlugTag(tag)} title={tag.tag}>{tag.tag}</Link></li>)
                }
            </ul>
        </>
    )
}