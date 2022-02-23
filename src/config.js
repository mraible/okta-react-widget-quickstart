export default {
  oidc: {
    issuer: 'https://dev-17700857.okta.com/oauth2/default',
    clientId: '0oa3ygn0b5Yfk2Ral5d7',
    scopes: ['openid', 'profile', 'email'],
    redirectUri: `${window.location.origin}/login/callback`,
  },
  widget: {
    issuer: 'https://dev-17700857.okta.com/oauth2/default',
    clientId: '0oa3ygn0b5Yfk2Ral5d7',
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ['openid', 'profile', 'email'],
    useInteractionCodeFlow: true
  },
};
