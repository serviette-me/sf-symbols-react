import { IconProps } from "../../types"

export default function FourSixCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM19.2227 20.6991C16.2827 20.6991 15.5037 17.4321 15.5037 14.9571C15.5037 12.0721 16.3517 9.1461 19.2637 9.1461C20.5627 9.1461 21.7247 9.6931 22.1077 10.9651C22.1617 11.1291 22.1757 11.3891 22.1757 11.5251C22.1757 12.1411 21.8747 12.7151 21.0407 12.7151C20.4807 12.7151 20.1387 12.4961 19.8517 11.9491C19.6467 11.6211 19.5097 11.3341 19.1407 11.3341C18.5257 11.3341 18.1697 12.3181 18.1697 14.2601V15.0661H18.1977C18.4297 14.1231 19.0727 13.3161 20.1657 13.3161C21.8747 13.3161 22.5587 15.0531 22.5587 16.7891C22.5587 18.8811 21.4097 20.6991 19.2227 20.6991ZM11.8807 20.5901C11.1427 20.5901 10.5407 20.1801 10.5407 19.2361V18.5661H8.3667C7.2867 18.5661 6.7537 18.0471 6.7537 17.0211C6.7537 16.4881 6.8907 15.8731 7.0817 15.2851L8.2437 12.0451C8.7367 10.6501 9.2417 9.2831 11.0467 9.2831C12.3597 9.2831 13.2207 10.0081 13.2207 11.3201V16.3511H13.3297C14.0407 16.3511 14.3827 16.7621 14.3827 17.4591C14.3827 18.0191 14.1507 18.5661 13.3167 18.5661H13.2207V19.2361C13.2207 20.2071 12.6187 20.5901 11.8807 20.5901ZM10.6367 16.4331V11.4301H10.5687L9.0237 16.3381V16.4331ZM19.1547 18.5121C19.6327 18.5121 19.8927 17.9241 19.8927 16.9261C19.8927 15.9281 19.6327 15.3121 19.1547 15.3121C18.7027 15.3121 18.4297 15.9001 18.4297 16.8571C18.4297 17.8961 18.6897 18.5121 19.1547 18.5121Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM18.7167 20.3166C15.8047 20.3166 14.9977 17.1036 14.9977 14.5196C14.9977 11.6486 15.8317 8.5726 18.7437 8.5726C20.0977 8.5726 21.2867 9.2146 21.6287 10.4586C21.6837 10.6366 21.6977 10.8556 21.6977 11.0056C21.6977 11.5386 21.4237 12.0176 20.7267 12.0176C20.2067 12.0176 19.9067 11.8126 19.6597 11.3206C19.4417 10.8696 19.1547 10.4996 18.6617 10.4996C17.5547 10.4996 17.2947 12.4006 17.2947 14.1506V14.6286H17.3227C17.6097 13.5626 18.3617 12.7696 19.4687 12.7696C21.2597 12.7696 22.0667 14.5336 22.0667 16.3516C22.0667 18.5116 20.8767 20.3166 18.7167 20.3166ZM11.3207 20.2206C10.7327 20.2206 10.1447 19.8786 10.1447 19.0316V17.9926H7.4917C6.6037 17.9926 6.0977 17.4996 6.0977 16.6526C6.0977 16.1606 6.2067 15.6816 6.4257 15.1076L8.2577 10.7596C8.7087 9.6116 9.2007 8.6816 10.5957 8.6816C11.7167 8.6816 12.4687 9.3106 12.4687 10.4586V16.0786H12.7697C13.4117 16.0786 13.6987 16.4476 13.6987 17.0356C13.6987 17.5406 13.4527 17.9926 12.7697 17.9926H12.4687V19.0316C12.4687 19.8656 11.9487 20.2206 11.3207 20.2206ZM10.2267 16.1326V10.6506H10.1577L8.1077 16.0376V16.1326ZM18.6617 18.4026C19.3867 18.4026 19.7417 17.4866 19.7417 16.4746C19.7557 15.4626 19.4277 14.5466 18.6617 14.5466C17.9237 14.5466 17.5547 15.4086 17.5547 16.4066C17.5547 17.4316 17.8967 18.4026 18.6617 18.4026Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM18.9767 20.5214C16.0647 20.5214 15.2717 17.2814 15.2717 14.7654C15.2717 11.8804 16.1057 8.8864 19.0177 8.8864C20.3437 8.8864 21.5197 9.4744 21.8747 10.7324C21.9297 10.9104 21.9437 11.1424 21.9437 11.2934C21.9437 11.8534 21.6697 12.4004 20.8907 12.4004C20.3577 12.4004 20.0297 12.1814 19.7557 11.6624C19.5507 11.2794 19.3457 10.9514 18.9077 10.9514C18.0737 10.9514 17.7597 12.3594 17.7597 14.2184V14.8614H17.7867C18.0467 13.8634 18.7307 13.0564 19.8377 13.0564C21.5877 13.0564 22.3257 14.8204 22.3257 16.5974C22.3257 18.7164 21.1637 20.5214 18.9767 20.5214ZM11.6077 20.4254C10.9507 20.4254 10.3497 20.0434 10.3497 19.1404V18.3064H7.9437C6.9727 18.3064 6.4397 17.8004 6.4397 16.8574C6.4397 16.3384 6.5627 15.7914 6.7677 15.2034L8.2577 11.4434C8.7227 10.1724 9.2287 9.0094 10.8417 9.0094C12.0587 9.0094 12.8657 9.6934 12.8657 10.9234V16.2284H13.0707C13.7407 16.2284 14.0547 16.6254 14.0547 17.2674C14.0547 17.8004 13.8227 18.3064 13.0567 18.3064H12.8657V19.1404C12.8657 20.0564 12.3047 20.4254 11.6077 20.4254ZM10.4457 16.2974V11.0744H10.3767L8.5997 16.2014V16.2974ZM18.9217 18.4704C19.5237 18.4704 19.8237 17.7184 19.8237 16.7204C19.8237 15.7094 19.5367 14.9574 18.9217 14.9574C18.3337 14.9574 18.0197 15.6814 18.0197 16.6524C18.0197 17.6774 18.3207 18.4704 18.9217 18.4704Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM17.7187 19.619C15.0117 19.619 14.2047 16.516 14.2047 13.891C14.2047 11.184 14.9707 7.834 17.7457 7.834C19.0857 7.834 20.2067 8.586 20.5077 9.803C20.5757 9.994 20.6037 10.172 20.6037 10.309C20.6037 10.691 20.3847 10.992 19.9477 10.992C19.5507 10.992 19.3457 10.787 19.1957 10.432C18.9357 9.721 18.4567 9.174 17.7047 9.174C15.9687 9.174 15.7497 12.209 15.7497 13.891V14.068H15.8047C16.1057 12.838 16.9527 11.977 18.1567 11.977C20.0017 11.977 20.9177 13.795 20.9177 15.668C20.9177 17.814 19.7697 19.619 17.7187 19.619ZM10.6227 19.523C10.2537 19.523 9.8437 19.277 9.8437 18.703V16.98H6.5217C5.9477 16.98 5.5647 16.584 5.5647 16.037C5.5647 15.682 5.6327 15.381 5.8107 14.943L8.6547 9.023C8.9827 8.313 9.3657 7.902 10.1447 7.902C10.8557 7.902 11.3887 8.299 11.3887 9.119V15.654H12.0317C12.4687 15.654 12.6877 15.928 12.6877 16.311C12.6877 16.693 12.4687 16.98 12.0317 16.98H11.3887V18.703C11.3887 19.223 11.0467 19.523 10.6227 19.523ZM9.8707 15.682V9.406H9.8167L6.9727 15.6V15.682ZM17.7047 18.279C18.8127 18.279 19.3457 16.912 19.3457 15.75C19.3597 14.574 18.8537 13.248 17.6917 13.248C16.5707 13.248 15.9957 14.52 15.9957 15.668C15.9957 16.83 16.5157 18.279 17.7047 18.279Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM18.3747 20.0701C15.5037 20.0701 14.6567 16.8711 14.6567 14.2461C14.6567 11.3751 15.5037 8.2031 18.4027 8.2031C19.7967 8.2031 21.0137 8.9001 21.3147 10.1441C21.3687 10.3081 21.3967 10.5001 21.3967 10.6641C21.3967 11.1421 21.1367 11.5661 20.5217 11.5661C20.0427 11.5661 19.7557 11.3611 19.5367 10.9101C19.3047 10.3771 18.9357 9.9391 18.3477 9.9391C16.9397 9.9391 16.7207 12.4411 16.7207 14.0681V14.3421H16.7757C17.0757 13.1801 17.9097 12.4141 19.0317 12.4141C20.8767 12.4141 21.7517 14.2051 21.7517 16.0781C21.7517 18.2651 20.5347 20.0701 18.3747 20.0701ZM10.9507 19.9741C10.4587 19.9741 9.8987 19.6741 9.8987 18.8941V17.6231H6.9177C6.1797 17.6231 5.6877 17.1441 5.6877 16.4061C5.6877 15.9551 5.7827 15.5451 6.0017 14.9841L8.2717 9.9261C8.6817 8.9551 9.1737 8.2991 10.3087 8.2991C11.3067 8.2991 11.9767 8.8591 11.9767 9.9121V15.8871H12.4137C13.0017 15.8871 13.2617 16.2561 13.2617 16.7481C13.2617 17.2401 13.0017 17.6231 12.4137 17.6231H11.9767V18.8941C11.9767 19.6331 11.5117 19.9741 10.9507 19.9741ZM9.9527 15.9281V10.1311H9.8987L7.5327 15.8461V15.9281ZM18.3477 18.3201C19.2367 18.3201 19.6467 17.1991 19.6467 16.1741C19.6737 15.1481 19.2777 14.0411 18.3477 14.0411C17.4317 14.0411 16.9937 15.0941 16.9937 16.1191C16.9937 17.1311 17.3767 18.3201 18.3477 18.3201Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM18.1977 19.9334C15.3257 19.9334 14.4787 16.7484 14.4787 14.0824C14.4787 11.2244 15.3127 7.9844 18.2107 7.9844C19.6327 7.9844 20.8497 8.7364 21.1367 9.9534C21.2047 10.1304 21.2187 10.3084 21.2187 10.4594C21.2187 10.9234 20.9727 11.3064 20.4117 11.3064C19.9337 11.3064 19.6737 11.1154 19.4687 10.6774C19.2367 10.0894 18.8127 9.6384 18.1697 9.6384C16.5977 9.6384 16.4067 12.4684 16.4067 14.0274V14.1774H16.4607C16.7887 12.9744 17.6507 12.2094 18.7847 12.2094C20.6577 12.2094 21.5737 14.0134 21.5737 15.9144C21.5737 18.1284 20.3437 19.9334 18.1977 19.9334ZM10.7457 19.8244C10.3087 19.8244 9.7617 19.5644 9.7617 18.8124V17.4184H6.6037C5.9337 17.4184 5.4547 16.9534 5.4547 16.2694C5.4547 15.8324 5.5367 15.4624 5.7697 14.9164L8.2847 9.4474C8.6817 8.5724 9.1597 8.0664 10.1447 8.0664C11.0737 8.0664 11.7167 8.6134 11.7167 9.5974V15.7774H12.2087C12.7697 15.7774 13.0157 16.1324 13.0157 16.5844C13.0157 17.0624 12.7557 17.4184 12.2087 17.4184H11.7167V18.8124C11.7167 19.4964 11.2797 19.8244 10.7457 19.8244ZM9.8027 15.8184V9.8434H9.7477L7.1917 15.7224V15.8184ZM18.1697 18.2794C19.1547 18.2794 19.6057 17.0354 19.6057 16.0094C19.6327 14.9704 19.2087 13.7534 18.1697 13.7534C17.1577 13.7534 16.6797 14.9164 16.6797 15.9414C16.6797 16.9534 17.0897 18.2794 18.1697 18.2794Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM18.5257 20.1799C15.6267 20.1799 14.8067 16.9669 14.8067 14.3689C14.8067 11.4979 15.6407 8.3669 18.5527 8.3669C19.9197 8.3669 21.1367 9.0369 21.4507 10.2809C21.5057 10.4589 21.5197 10.6509 21.5197 10.8149C21.5197 11.3199 21.2597 11.7579 20.6037 11.7579C20.1117 11.7579 19.8237 11.5529 19.5917 11.0879C19.3727 10.5819 19.0317 10.1859 18.4847 10.1859C17.2127 10.1859 16.9667 12.4279 16.9667 14.1099V14.4649H17.0077C17.3087 13.3439 18.1017 12.5649 19.2227 12.5649C21.0407 12.5649 21.8887 14.3559 21.8887 16.2009C21.8887 18.3749 20.6857 20.1799 18.5257 20.1799ZM11.1157 20.0839C10.5687 20.0839 10.0077 19.7699 10.0077 18.9489V17.7869H7.1637C6.3577 17.7869 5.8657 17.3089 5.8657 16.5159C5.8657 16.0369 5.9607 15.5999 6.1797 15.0389L8.2717 10.2809C8.6957 9.2419 9.1877 8.4629 10.4317 8.4629C11.4847 8.4629 12.1957 9.0649 12.1957 10.1449V15.9689H12.5647C13.1797 15.9689 13.4527 16.3379 13.4527 16.8709C13.4527 17.3769 13.1937 17.7869 12.5647 17.7869H12.1957V18.9489C12.1957 19.7289 11.7027 20.0839 11.1157 20.0839ZM10.0627 16.0239V10.3629H10.0077L7.7797 15.9279V16.0239ZM18.4847 18.3609C19.3047 18.3609 19.6877 17.3219 19.6877 16.3109C19.7147 15.2849 19.3457 14.2599 18.4847 14.2599C17.6507 14.2599 17.2407 15.2309 17.2407 16.2419C17.2407 17.2539 17.6097 18.3609 18.4847 18.3609Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM17.0897 19.2092C14.5877 19.2092 13.8497 16.2012 13.8497 13.6442C13.8497 11.1292 14.5057 7.6422 17.1167 7.6422C18.3617 7.6422 19.3597 8.4082 19.6737 9.5972C19.7417 9.8162 19.7697 9.9942 19.7697 10.1172C19.7697 10.3902 19.6187 10.5682 19.3317 10.5682C19.0177 10.5682 18.9077 10.3772 18.8127 10.1032C18.5387 9.2422 18.0057 8.5582 17.0897 8.5582C15.1487 8.5582 14.8747 11.8532 14.8747 13.7132V13.9452H14.9297C15.1897 12.6742 16.0367 11.6892 17.3227 11.6892C19.1407 11.6892 20.0427 13.4942 20.0427 15.3672C20.0427 17.4182 19.0177 19.2092 17.0897 19.2092ZM10.4587 19.1132C10.1717 19.1132 9.9397 18.9222 9.9397 18.5662V16.4062H6.3987C5.9607 16.4062 5.7007 16.1192 5.7007 15.7362C5.7007 15.4902 5.7557 15.2712 5.8787 14.9842L9.1467 8.4632C9.3787 7.9702 9.6247 7.6702 10.1577 7.6702C10.5687 7.6702 10.9647 7.8882 10.9647 8.5042V15.4902H11.7987C12.0727 15.4902 12.2637 15.6812 12.2637 15.9412C12.2637 16.2152 12.0997 16.4062 11.7987 16.4062H10.9647V18.5662C10.9647 18.8812 10.7327 19.1132 10.4587 19.1132ZM9.9397 15.5042V8.8322H9.8987L6.6717 15.4492V15.5042ZM17.0757 18.2792C18.3747 18.2792 19.0037 16.7342 19.0037 15.4082C19.0177 14.0542 18.3887 12.5922 17.0627 12.5922C15.8047 12.5922 15.0797 14.0132 15.0797 15.3122C15.0797 16.6932 15.7367 18.2792 17.0757 18.2792Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM16.7617 18.9761C14.3827 18.9761 13.6717 16.0371 13.6717 13.5081C13.6717 11.0881 14.2737 7.5331 16.8027 7.5331C17.9917 7.5331 18.9217 8.3121 19.2497 9.4741C19.3187 9.7071 19.3597 9.8981 19.3597 10.0081C19.3597 10.2261 19.2227 10.3491 19.0177 10.3491C18.7577 10.3491 18.6897 10.1581 18.6207 9.9261C18.3477 8.9821 17.7597 8.2441 16.7757 8.2441C14.7247 8.2441 14.4377 11.6761 14.4377 13.6171V13.8631H14.4787C14.7247 12.5641 15.5587 11.5391 16.8987 11.5391C18.7027 11.5391 19.5917 13.3301 19.5917 15.2031C19.5917 17.1991 18.6207 18.9761 16.7617 18.9761ZM10.3767 18.8941C10.1307 18.8941 9.9807 18.7171 9.9807 18.4841V16.0921H6.3297C5.9747 16.0921 5.7697 15.8731 5.7697 15.5721C5.7697 15.3811 5.8107 15.2031 5.9197 14.9841L9.3927 8.1621C9.5837 7.7791 9.7617 7.5471 10.1577 7.5471C10.4177 7.5471 10.7457 7.6701 10.7457 8.1761V15.3941H11.6897C11.8667 15.3941 12.0447 15.5311 12.0447 15.7361C12.0447 15.9551 11.9077 16.0921 11.6897 16.0921H10.7457V18.4841C10.7457 18.6891 10.5817 18.8941 10.3767 18.8941ZM9.9807 15.3941V8.5171H9.9397L6.5217 15.3671V15.3941ZM16.7617 18.2651C18.1427 18.2651 18.8397 16.6391 18.8397 15.2171C18.8397 13.7811 18.1427 12.2361 16.7477 12.2361C15.4077 12.2361 14.6157 13.7401 14.6157 15.1071C14.6157 16.5981 15.3397 18.2651 16.7617 18.2651Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}