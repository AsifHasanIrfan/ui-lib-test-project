import { styled } from '@material-ui/core/styles';
import { withRouter } from "next/router";

const StyledLink = styled('div')`
  a:hover { 
      background-color: rgba(255, 255, 255, 0.2);
      transition: 0.2s ease-in-out;
  }
`;

const ActiveLink = ({ router, href, children }: any) => {

    (function prefetchPages() {
        if (typeof window !== "undefined") {
            router.prefetch(router.pathname)
        }
    })()

    const handleClick = (event: any) => {
        event.preventDefault();
        router.push(href);
    };

    const isCurrentPath = router.pathname === href || router.asPath === href;

    return (
        <StyledLink>
            <a href={href}
            onClick={handleClick}
            style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '5px',
                backgroundColor: isCurrentPath ? 'rgba(255, 255, 255, 0.2)' : '',
                margin: '5px 10px',
                height: '65px',
                width: '85px',
                content: 'dfsdafd',
            }}
            >
                {children}
                
            </a>
        </StyledLink>
    );
};

export default withRouter(ActiveLink);