import React, { useEffect } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import IconClose from ''
import IconInformationCircle from ''
import IconAlertTriangle from ''
import IconCheck from ''

function ToastBuilder ({
  message,
  toastType, // it accepts 'success','error','info'
  onClose,
  show,
  timeInMs,
  showCloseButton = true,
  style,
  InnerStyle,
  ...rest
}) {
  let leftIcon, bgColor, color
  const rightIcon = <IconClose onClick={onClose} />
  if (toastType === 'success') {
    leftIcon = <IconCheck />
    bgColor = '#EBF7EC'
    color = '#047205'
  } else if (toastType === 'error') {
    leftIcon = <IconAlertTriangle />
    bgColor = '#FFF0F0'
    color = '#DF0101'
  } else if (toastType === 'info') {
    leftIcon = <IconInformationCircle />
    bgColor = '#EBF7FE'
    color = '#006497'
  }

  useEffect(() => {
    if (timeInMs > 0) {
      const toastTimeout = setTimeout(onClose, timeInMs)
      return () => clearTimeout(toastTimeout)
    }
  }, [onClose, timeInMs])

  return (
    <>
      <ToastContainer style={{ top: '50px', right: 0, ...style }} {...rest} >
        <Toast
          show={show}
          style={{ borderColor: `${bgColor}`, color: `${color}`, ...InnerStyle }}
          onClose={onClose}
          className="rounded-1 overflow-hidden"
        >
          <Toast.Body
            style={{ background: `${bgColor}` }}
          >
            <div className="d-flex">
              <div className="d-flex align-items-center me-4">
                <span className="left-icon me-3">{leftIcon}</span>
                <div>{message} </div>
              </div>
              {showCloseButton && <div role="button" className="right-icon">{rightIcon}</div>}
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}

export default ToastBuilder
