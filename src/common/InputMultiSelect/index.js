import React from 'react'
import Select from 'react-select'
// import { Tooltip } from '@cimpress/react-components'

function InputMultiSelect ({
  value,
  label,
  required,
  onChange,
  options,
  containerClass,
  name,
  alertMessage,
  tooltip,
  description,
  variant,
  leftIcon,
  rightIcon,
  styles,
  isClearable = true,
  ...rest
}) {
  const components = {
    DropdownIndicator: null
  }
  const handleChange = (newValue, actionMeta) => {
    onChange(actionMeta.name || name, newValue, actionMeta)
  }
  const alertMessageClass =
    variant === 'success' || variant === 'error' ? `${variant}-message` : ''
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '4px',
      border:
        variant === 'success'
          ? '1px solid #108548'
          : variant === 'error'
            ? '1px solid #bb0000'
            : ''
    }),
    container: (provided, state) => ({
      ...provided,
      marginTop: '4px',
      height: '36px',
      width: '100%'
    }),
    ...styles
  }
  const classNamePrefix = `creatable-input ${variant || ''} ${
    leftIcon ? 'left-icon-control ' : ''
  } ${rightIcon ? 'right-icon-control ' : ''}`
  return (
    <div
      className={`mb-2 ${containerClass || ''}`}
      styles={{ height: '72px' }}
    >
      {label && (
        <label className='form-label text-light-grey text-12 mb-0'>
          {`${label}${required ? '*' : ''}`}
        </label>
      )}
      {/* {tooltip && (
        <Tooltip direction='right' contents={tooltip}>
          <IconInformationCircle className='text-light-grey cursor-pointer ms-1' />
        </Tooltip>
      )} */}
      {description && <div className='text-10'>{description}</div>}
      <div className='creatable-input-container'>
        {leftIcon && (
          <span className={`left-icon ${alertMessageClass}`}>{leftIcon}</span>
        )}
        <Select
          isMulti
          styles={customStyles}
          value={value}
          onChange={handleChange}
          name={name}
          options={options}
          components={components}
          classNamePrefix={classNamePrefix}
          isClearable={rightIcon ? false : isClearable}
          placeholder=''
          {...rest}
        />
        {rightIcon && (
          <span className={`right-icon ${alertMessageClass}`}>{rightIcon}</span>
        )}
      </div>
      {alertMessage && (
        <div className={`text-10 mt-1 ${alertMessageClass}`}>{alertMessage}</div>
      )}
    </div>
  )
}

export default InputMultiSelect
