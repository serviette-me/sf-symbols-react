import { IconProps } from "../../types"

export default function CheckmarkRectangleStackFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.33984375 33.46875"
          className={className}
        >
          <path
            d="              M5.8517 2.3101H23.4747C23.3377 0.8611 22.3537 0.0001 20.8227 0.0001H8.5177C6.9867 0.0001 5.9887 0.8611 5.8517 2.3101ZM3.2127 6.9731H26.1267C25.9767 5.4411 25.0467 4.4571 23.2147 4.4571H6.1117C4.2797 4.4571 3.3637 5.4411 3.2127 6.9731ZM5.1547 33.4691H24.1717C27.4397 33.4691 29.3397 31.5821 29.3397 28.3141V14.4511C29.3397 11.2111 27.4397 9.3101 24.1717 9.3101H5.1547C1.9007 9.3101 -0.0003 11.2111 -0.0003 14.4511V28.3141C-0.0003 31.5821 1.9007 33.4691 5.1547 33.4691ZM13.1797 28.4371C12.4417 28.4371 11.8397 28.0681 11.3337 27.4941L8.3537 24.0491C7.9297 23.5561 7.7927 23.1741 7.7927 22.6811C7.7927 21.6011 8.6817 20.7671 9.7347 20.7671C10.3357 20.7671 10.7867 21.0271 11.1837 21.4651L13.1797 23.7481L17.9927 16.1871C18.4567 15.4631 18.9907 15.0801 19.7017 15.0801C20.7537 15.0801 21.6837 15.8731 21.6837 16.9261C21.6837 17.3081 21.5747 17.7461 21.2737 18.1701L14.9977 27.4531C14.5607 28.0551 13.9047 28.4371 13.1797 28.4371Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.7109375 31.595703125"
          className={className}
        >
          <path
            d="              M5.6467 2.0368H23.0777C22.9687 0.7248 22.1487 -0.0002 20.7537 -0.0002H7.9707C6.5767 -0.0002 5.7557 0.7248 5.6467 2.0368ZM2.9117 6.2618H25.8127C25.6347 4.8668 24.8687 4.0468 23.2697 4.0468H5.4417C3.8417 4.0468 3.0897 4.8668 2.9117 6.2618ZM4.6617 31.5958H24.0487C27.0707 31.5958 28.7107 29.9548 28.7107 26.9608V13.1528C28.7107 10.1718 27.0707 8.5308 24.0487 8.5308H4.6617C1.6407 8.5308 -0.0003 10.1718 -0.0003 13.1528V26.9608C-0.0003 29.9548 1.6407 31.5958 4.6617 31.5958ZM12.8517 26.9198C12.2497 26.9198 11.7577 26.6468 11.3207 26.1138L8.1207 22.2848C7.8067 21.9028 7.6697 21.5608 7.6697 21.1638C7.6697 20.3168 8.3537 19.6468 9.2017 19.6468C9.6937 19.6468 10.0627 19.8378 10.4317 20.2888L12.8247 23.2148L18.1427 14.7378C18.5117 14.1638 18.9497 13.8768 19.4957 13.8768C20.3167 13.8768 21.0547 14.4788 21.0547 15.3258C21.0547 15.6678 20.9177 16.0508 20.6857 16.3928L14.3277 26.0998C13.9727 26.6188 13.4527 26.9198 12.8517 26.9198Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.0390625 32.580078125"
          className={className}
        >
          <path
            d="              M5.7557 2.174H23.2837C23.1597 0.793 22.2577 0 20.7817 0H8.2577C6.7947 0 5.8787 0.793 5.7557 2.174ZM3.0767 6.631H25.9767C25.8127 5.168 24.9647 4.252 23.2427 4.252H5.7967C4.0747 4.252 3.2407 5.168 3.0767 6.631ZM4.9217 32.58H24.1177C27.2617 32.58 29.0387 30.803 29.0387 27.672V13.836C29.0387 10.719 27.2617 8.928 24.1177 8.928H4.9217C1.7777 8.928 -0.0003 10.719 -0.0003 13.836V27.672C-0.0003 30.803 1.7777 32.58 4.9217 32.58ZM13.0297 27.727C12.3457 27.727 11.7987 27.398 11.3337 26.838L8.2437 23.201C7.8747 22.764 7.7387 22.408 7.7387 21.957C7.7387 20.986 8.5317 20.234 9.4887 20.234C10.0347 20.234 10.4457 20.453 10.8277 20.904L13.0157 23.488L18.0607 15.504C18.4847 14.848 18.9767 14.506 19.6057 14.506C20.5487 14.506 21.3967 15.203 21.3967 16.174C21.3967 16.529 21.2597 16.939 20.9867 17.322L14.6837 26.811C14.2867 27.371 13.6857 27.727 13.0297 27.727Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.205078125 29.06640625"
          className={className}
        >
          <path
            d="              M5.4687 1.4083H22.7497C22.6957 0.5063 22.1757 0.0003 21.2187 0.0003H7.0137C6.0427 0.0003 5.5237 0.5063 5.4687 1.4083ZM2.7477 4.9083H25.4707C25.3337 3.9653 24.8557 3.4043 23.8297 3.4043H4.4027C3.3637 3.4043 2.8847 3.9653 2.7477 4.9083ZM3.9377 29.0663H24.2677C26.8657 29.0663 28.2047 27.7133 28.2047 25.1563V11.1563C28.2047 8.5993 26.8657 7.2593 24.2677 7.2593H3.9377C1.3267 7.2593 -0.0003 8.5723 -0.0003 11.1563V25.1563C-0.0003 27.7263 1.3267 29.0663 3.9377 29.0663ZM12.6057 24.7733C12.2497 24.7733 11.9767 24.6233 11.6897 24.2673L7.9847 19.8243C7.8207 19.6053 7.7247 19.3593 7.7247 19.1273C7.7247 18.6483 8.0937 18.2653 8.5727 18.2653C8.8727 18.2653 9.1057 18.3613 9.3517 18.7033L12.5647 22.6403L18.8537 12.6873C19.0447 12.3733 19.3317 12.2093 19.6057 12.2093C20.0707 12.2093 20.4937 12.5373 20.4937 13.0153C20.4937 13.2483 20.3707 13.4943 20.2477 13.6993L13.4807 24.2673C13.2617 24.5953 12.9607 24.7733 12.6057 24.7733Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.314453125 30.392578125"
          className={className}
        >
          <path
            d="              M5.5097 1.8592H22.8187C22.7227 0.6562 22.0117 0.0002 20.6997 0.0002H7.6157C6.3167 0.0002 5.5917 0.6562 5.5097 1.8592ZM2.7207 5.8102H25.6077C25.4157 4.5112 24.7597 3.7732 23.3107 3.7732H5.0177C3.5687 3.7732 2.9117 4.5112 2.7207 5.8102ZM4.3337 30.3922H23.9807C26.8247 30.3922 28.3147 28.9162 28.3147 26.0992V12.3322C28.3147 9.5152 26.8247 8.0392 23.9807 8.0392H4.3337C1.4767 8.0392 -0.0003 9.5022 -0.0003 12.3322V26.0992C-0.0003 28.9162 1.4767 30.3922 4.3337 30.3922ZM12.6467 25.9632C12.1267 25.9632 11.7027 25.7302 11.3207 25.2382L7.9707 21.1642C7.7247 20.8632 7.6017 20.5352 7.6017 20.1932C7.6017 19.4962 8.1487 18.9222 8.8597 18.9222C9.2837 18.9222 9.6117 19.0862 9.9527 19.5232L12.5917 22.8732L18.2517 13.8222C18.5387 13.3442 18.9217 13.1112 19.3597 13.1112C20.0427 13.1112 20.6587 13.5902 20.6587 14.3012C20.6587 14.6152 20.4937 14.9572 20.3027 15.2582L13.9047 25.2242C13.5897 25.7032 13.1527 25.9632 12.6467 25.9632Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.095703125 29.72265625"
          className={className}
        >
          <path
            d="              M5.4277 1.7634H22.6817C22.5997 0.6014 21.9437 0.0004 20.6717 0.0004H7.4237C6.1657 0.0004 5.5097 0.6014 5.4277 1.7634ZM2.6117 5.5504H25.4977C25.2927 4.3064 24.7047 3.6234 23.3377 3.6234H4.7717C3.4047 3.6234 2.8167 4.3064 2.6117 5.5504ZM4.1567 29.7224H23.9397C26.6877 29.7224 28.0957 28.3284 28.0957 25.6074V11.8534C28.0957 9.1324 26.6877 7.7524 23.9397 7.7524H4.1567C1.3807 7.7524 -0.0003 9.1324 -0.0003 11.8534V25.6074C-0.0003 28.3284 1.3807 29.7224 4.1567 29.7224ZM12.5237 25.4024C12.0587 25.4024 11.6757 25.2244 11.3067 24.7464L7.8887 20.5354C7.6837 20.2614 7.5607 19.9474 7.5607 19.6464C7.5607 19.0174 8.0387 18.5114 8.6547 18.5114C9.0507 18.5114 9.3517 18.6484 9.6937 19.0994L12.4687 22.6814L18.3067 13.3024C18.5527 12.8784 18.9087 12.6734 19.2777 12.6734C19.8787 12.6734 20.4397 13.0844 20.4397 13.7124C20.4397 14.0274 20.2617 14.3414 20.0977 14.6154L13.6587 24.7464C13.3847 25.1834 12.9887 25.4024 12.5237 25.4024Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.478515625 30.912109375"
          className={className}
        >
          <path
            d="              M5.5647 1.941H22.9277C22.8317 0.684 22.0667 0 20.7267 0H7.7657C6.4257 0 5.6597 0.684 5.5647 1.941ZM2.8027 6.002H25.6897C25.5117 4.676 24.8147 3.896 23.2967 3.896H5.1957C3.6777 3.896 2.9937 4.676 2.8027 6.002ZM4.4707 30.912H24.0077C26.9337 30.912 28.4787 29.367 28.4787 26.469V12.688C28.4787 9.803 26.9337 8.244 24.0077 8.244H4.4707C1.5447 8.244 -0.0003 9.789 -0.0003 12.688V26.469C-0.0003 29.367 1.5447 30.912 4.4707 30.912ZM12.7287 26.373C12.1677 26.373 11.7307 26.127 11.3207 25.621L8.0387 21.643C7.7657 21.314 7.6287 20.973 7.6287 20.604C7.6287 19.852 8.2437 19.236 8.9957 19.236C9.4607 19.236 9.8027 19.4 10.1587 19.852L12.6877 23.023L18.2107 14.219C18.5257 13.699 18.9357 13.439 19.4137 13.439C20.1527 13.439 20.8357 13.973 20.8357 14.738C20.8357 15.066 20.6857 15.422 20.4667 15.75L14.0817 25.607C13.7537 26.1 13.2757 26.373 12.7287 26.373Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.369140625 28.19140625"
          className={className}
        >
          <path
            d="              M5.5237 0.9158H22.8457C22.8317 0.3828 22.4907 -0.0002 21.9157 -0.0002H6.4527C5.8927 -0.0002 5.5367 0.3828 5.5237 0.9158ZM2.9257 4.0608H25.4437C25.4027 3.5138 25.0607 3.1038 24.4727 3.1038H3.8967C3.3087 3.1038 2.9807 3.5138 2.9257 4.0608ZM3.6637 28.1918H24.7047C27.1117 28.1918 28.3687 26.9058 28.3687 24.5408V10.2398C28.3687 7.8748 27.1117 6.5898 24.7047 6.5898H3.6637C1.2577 6.5898 -0.0003 7.8478 -0.0003 10.2398V24.5408C-0.0003 26.9338 1.2577 28.1918 3.6637 28.1918ZM12.7287 23.9258C12.5097 23.9258 12.3597 23.8438 12.1957 23.6388L8.0937 18.8668C7.9977 18.7308 7.9297 18.5798 7.9297 18.4298C7.9297 18.1428 8.1757 17.9238 8.4497 17.9238C8.6407 17.9238 8.7777 17.9918 8.9277 18.1698L12.7017 22.5998L19.5777 11.8808C19.7017 11.7028 19.8787 11.5938 20.0427 11.5938C20.3167 11.5938 20.5627 11.8128 20.5627 12.0858C20.5627 12.2088 20.5077 12.3598 20.4397 12.4688L13.2477 23.6388C13.0977 23.8168 12.9337 23.9258 12.7287 23.9258Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.451171875 27.75390625"
          className={className}
        >
          <path
            d="              M5.5507 0.684H22.9007C22.9007 0.328 22.6407 0 22.2847 0H6.1657C5.8107 0 5.5507 0.328 5.5507 0.684ZM3.0217 3.637H25.4297C25.4297 3.281 25.1697 2.953 24.8007 2.953H3.6507C3.2817 2.953 3.0217 3.281 3.0217 3.637ZM3.5137 27.754H24.9377C27.2347 27.754 28.4517 26.496 28.4517 24.24V9.775C28.4517 7.506 27.2347 6.262 24.9377 6.262H3.5137C1.2167 6.262 -0.0003 7.478 -0.0003 9.775V24.24C-0.0003 26.523 1.2167 27.754 3.5137 27.754ZM12.7837 23.488C12.6327 23.488 12.5507 23.447 12.4547 23.324L8.1617 18.389C8.0937 18.293 8.0387 18.184 8.0387 18.088C8.0387 17.883 8.2167 17.76 8.3807 17.76C8.5177 17.76 8.6137 17.801 8.6957 17.896L12.7697 22.586L19.9477 11.471C20.0297 11.375 20.1527 11.279 20.2757 11.279C20.4397 11.279 20.6037 11.457 20.6037 11.621C20.6037 11.689 20.5767 11.785 20.5347 11.853L13.1247 23.324C13.0157 23.42 12.9197 23.488 12.7837 23.488Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
