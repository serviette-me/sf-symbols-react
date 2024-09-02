import { IconProps } from "../../types"

export default function LtCircleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM10.4587 20.1391C9.5837 20.1391 9.1187 19.5921 9.1187 18.7301V10.8961C9.1187 10.1441 9.7207 9.5571 10.4727 9.5571C11.2247 9.5571 11.8127 10.1441 11.8127 10.8961V17.9511H13.5217C14.1097 17.9511 14.6157 18.4431 14.6157 19.0451C14.6157 19.6331 14.1097 20.1391 13.5217 20.1391ZM17.8007 20.2891C17.0487 20.2891 16.4477 19.7011 16.4477 18.9351V11.8941H15.5587C14.9567 11.8941 14.4787 11.4021 14.4787 10.8011C14.4787 10.2261 14.9567 9.7211 15.5587 9.7211H20.0297C20.6167 9.7211 21.1097 10.2261 21.1097 10.8011C21.1097 11.4021 20.6167 11.8941 20.0297 11.8941H19.1407V18.9351C19.1407 19.7011 18.5527 20.2891 17.8007 20.2891Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM9.8027 19.7696C9.0647 19.7696 8.6547 19.3046 8.6547 18.5526V10.1306C8.6547 9.4886 9.1737 8.9686 9.8297 8.9686C10.4587 8.9686 10.9787 9.4886 10.9787 10.1306V17.8556H13.2757C13.7817 17.8556 14.2327 18.2796 14.2327 18.7986C14.2327 19.3316 13.7817 19.7696 13.2757 19.7696ZM17.4047 19.9196C16.7477 19.9196 16.2287 19.4136 16.2287 18.7446V11.0336H14.9437C14.4237 11.0336 13.9997 10.6096 13.9997 10.0766C13.9997 9.5706 14.4237 9.1326 14.9437 9.1326H19.8107C20.3297 9.1326 20.7537 9.5706 20.7537 10.0766C20.7537 10.6096 20.3297 11.0336 19.8107 11.0336H18.5527V18.7446C18.5527 19.4136 18.0467 19.9196 17.4047 19.9196Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM10.1447 19.9744C9.3377 19.9744 8.9007 19.4554 8.9007 18.6484V10.5414C8.9007 9.8434 9.4607 9.2834 10.1717 9.2834C10.8687 9.2834 11.4157 9.8434 11.4157 10.5414V17.9104H13.3987C13.9587 17.9104 14.4377 18.3754 14.4377 18.9354C14.4377 19.4964 13.9587 19.9744 13.3987 19.9744ZM17.6097 20.1254C16.9117 20.1254 16.3377 19.5784 16.3377 18.8534V11.4984H15.2717C14.6977 11.4984 14.2457 11.0474 14.2457 10.4594C14.2457 9.9254 14.6977 9.4474 15.2717 9.4474H19.9337C20.4807 9.4474 20.9457 9.9254 20.9457 10.4594C20.9457 11.0474 20.4807 11.4984 19.9337 11.4984H18.8667V18.8534C18.8667 19.5784 18.3067 20.1254 17.6097 20.1254Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM9.1467 19.086C8.6677 19.086 8.3807 18.771 8.3807 18.266V8.982C8.3807 8.559 8.7367 8.203 9.1597 8.203C9.5837 8.203 9.9397 8.559 9.9397 8.982V17.76H13.0567C13.3987 17.76 13.7127 18.061 13.7127 18.416C13.7127 18.785 13.3987 19.086 13.0567 19.086ZM16.6937 19.236C16.2557 19.236 15.9137 18.881 15.9137 18.443V9.666H14.0407C13.6577 9.666 13.3707 9.379 13.3707 8.996C13.3707 8.641 13.6577 8.354 14.0407 8.354H19.2087C19.5777 8.354 19.8657 8.641 19.8657 8.996C19.8657 9.379 19.5777 9.666 19.2087 9.666H17.4587V18.443C17.4587 18.881 17.1167 19.236 16.6937 19.236Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM9.3927 19.5231C8.7367 19.5231 8.3667 19.0991 8.3667 18.4301V9.6391C8.3667 9.0641 8.8317 8.5861 9.4067 8.5861C9.9807 8.5861 10.4457 9.0641 10.4457 9.6391V17.7731H13.1117C13.5757 17.7731 13.9727 18.1701 13.9727 18.6481C13.9727 19.1271 13.5757 19.5231 13.1117 19.5231ZM17.1447 19.6741C16.5567 19.6741 16.0917 19.2091 16.0917 18.6211V10.4861H14.5607C14.0817 10.4861 13.6987 10.1031 13.6987 9.5981C13.6987 9.1331 14.0817 8.7501 14.5607 8.7501H19.6737C20.1527 8.7501 20.5347 9.1331 20.5347 9.5981C20.5347 10.1031 20.1527 10.4861 19.6737 10.4861H18.1837V18.6211C18.1837 19.2091 17.7187 19.6741 17.1447 19.6741Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM9.1597 19.3864C8.5447 19.3864 8.2027 18.9904 8.2027 18.3614V9.3514C8.2027 8.8184 8.6407 8.3804 9.1737 8.3804C9.7067 8.3804 10.1447 8.8184 10.1447 9.3514V17.7324H13.0157C13.4527 17.7324 13.8357 18.1014 13.8357 18.5524C13.8357 19.0034 13.4527 19.3864 13.0157 19.3864ZM17.0077 19.5374C16.4607 19.5374 16.0097 19.0994 16.0097 18.5394V10.1584H14.3417C13.8767 10.1584 13.5217 9.8024 13.5217 9.3374C13.5217 8.8864 13.8767 8.5314 14.3417 8.5314H19.6057C20.0427 8.5314 20.3987 8.8864 20.3987 9.3374C20.3987 9.8024 20.0427 10.1584 19.6057 10.1584H17.9787V18.5394C17.9787 19.0994 17.5407 19.5374 17.0077 19.5374Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM9.5707 19.6329C8.8727 19.6329 8.4907 19.1949 8.4907 18.4849V9.8439C8.4907 9.2419 8.9827 8.7499 9.5837 8.7499C10.1857 8.7499 10.6777 9.2419 10.6777 9.8439V17.8149H13.1797C13.6717 17.8149 14.0817 18.2249 14.0817 18.7169C14.0817 19.2089 13.6717 19.6329 13.1797 19.6329ZM17.2537 19.7829C16.6387 19.7829 16.1467 19.2909 16.1467 18.6759V10.7189H14.7247C14.2187 10.7189 13.8227 10.3219 13.8227 9.8029C13.8227 9.3239 14.2187 8.9139 14.7247 8.9139H19.7417C20.2207 8.9139 20.6307 9.3239 20.6307 9.8029C20.6307 10.3219 20.2207 10.7189 19.7417 10.7189H18.3477V18.6759C18.3477 19.2909 17.8557 19.7829 17.2537 19.7829Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM9.1327 18.7032C8.8317 18.7032 8.6267 18.4982 8.6267 18.1562V8.4902C8.6267 8.2172 8.8597 7.9842 9.1467 7.9842C9.4197 7.9842 9.6527 8.2172 9.6527 8.4902V17.8012H13.0977C13.3297 17.8012 13.5487 18.0062 13.5487 18.2382C13.5487 18.4982 13.3297 18.7032 13.0977 18.7032ZM16.2827 18.8262C15.9957 18.8262 15.7777 18.6072 15.7777 18.3202V9.0232H13.6307C13.3707 9.0232 13.1797 8.8182 13.1797 8.5722C13.1797 8.3122 13.3707 8.1212 13.6307 8.1212H18.7027C18.9487 8.1212 19.1407 8.3122 19.1407 8.5722C19.1407 8.8182 18.9487 9.0232 18.7027 9.0232H16.7887V18.3202C16.7887 18.6072 16.5567 18.8262 16.2827 18.8262Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM9.1187 18.4981C8.9137 18.4981 8.7497 18.3341 8.7497 18.1011V8.2301C8.7497 8.0391 8.9277 7.8611 9.1467 7.8611C9.3377 7.8611 9.5157 8.0391 9.5157 8.2301V17.8011H13.1247C13.3027 17.8011 13.4667 17.9651 13.4667 18.1421C13.4667 18.3341 13.3027 18.4981 13.1247 18.4981ZM16.0647 18.6211C15.8597 18.6211 15.6957 18.4571 15.6957 18.2521V8.6681H13.4117C13.2207 8.6681 13.0837 8.5311 13.0837 8.3401C13.0837 8.1351 13.2207 7.9981 13.4117 7.9981H18.4437C18.6347 7.9981 18.7717 8.1351 18.7717 8.3401C18.7717 8.5311 18.6347 8.6681 18.4437 8.6681H16.4477V18.2521C16.4477 18.4571 16.2827 18.6211 16.0647 18.6211Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
