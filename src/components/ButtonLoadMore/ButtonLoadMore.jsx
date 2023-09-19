import { BsCloudDownloadFill } from 'react-icons/bs';
import { ButtonLoad } from './ButtonLoadMore.styled'

function ButtonLoadMore({ onClick }) {
    return (
        <ButtonLoad type="button">
            Load more <BsCloudDownloadFill />
        </ButtonLoad>
    );
}


export default ButtonLoadMore;