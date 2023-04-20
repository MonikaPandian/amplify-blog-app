import SocialPostCollection from './ui-components/SocialPostCollection';
import { Button } from '@aws-amplify/ui-react';
import { useNavigate } from "react-router-dom";
import { Flex } from '@aws-amplify/ui-react';

const Post = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Flex
                direction="row"
                justifyContent="flex-end"
                alignItems="stretch"
                alignContent="flex-end"
                marginTop="20px"
                marginRight="20px"
                wrap="nowrap"
                gap="1rem"
            >
                <Button variation="primary" onClick={() => navigate('/post-create')}>Create Post</Button>
            </Flex>
            <Flex
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                alignContent="center"
                wrap="nowrap"
                gap="1rem"
            >
                <SocialPostCollection />
            </Flex>

        </div>
    )
}

export default Post;