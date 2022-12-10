import { $ } from '@oplayer/core'

export const wrap = $.css`
  width: 2.65em;
  height: 7.65em;
  padding-bottom: 3px;
  box-sizing: content-box;
`

export const volumeValue = $.css(`
  width: 100%;
  text-align: center;
  height: 28px;
  line-height: 28px;
  margin-bottom: 2px;
  font-size: 0.75em;
`)

export const track = $.css(`
  position:relative;
  display: flex;
  justify-content: center;
  height: 4.8em;
  cursor: pointer;
`)

export const sliderWrap = $.css(`
  height: 100%;
  width: 4px;
  position: relative;
`)

export const slider = $.css(`
  width: 4px;
  height: 100%;
  overflow: hidden;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.3);
`)

export const line = $.css(`
  height: 100%;
  background-color: var(--primary-color);
  transform-origin: 0 100%;
`)

export const thumb = $.css`
  position:absolute;
  bottom: 0;
  top: auto;
  left: -4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--primary-color);
  vertical-align: middle;
  pointer-events: none;
  `
