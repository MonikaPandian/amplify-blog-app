import { PostCreateForm } from './ui-components';
import { useNavigate } from "react-router-dom";
import { Button } from '@aws-amplify/ui-react';
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
                <Button variation="primary" onClick={() => navigate('/')}>Back to Home</Button>

            </Flex>
            <PostCreateForm />
        </div>

    )
}

export default Post;