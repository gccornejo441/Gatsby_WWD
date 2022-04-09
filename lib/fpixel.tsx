export const FB_PIXEL_ID = "401786405074161"

declare global {
    interface Window {
        fbq: any;
    }
}

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq('track', name, options)
}