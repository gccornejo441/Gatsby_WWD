import MessengerCustomerChat from 'react-messenger-customer-chat'
export const FBMessenger = () => {
    return (
        <>
            <MessengerCustomerChat
                pageId={process.env.NEXT_PUBLIC_ENV_FACEBOOK_PAGE_ID}
                appId={process.env.NEXT_PUBLIC_ENV_FACEBOOK_APP_ID}
                version={"v13.0"}
                xfbml={true}
            />
        </>

    )
}

