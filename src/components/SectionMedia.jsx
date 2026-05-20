function MediaCredit({ credit, sourceUrl }) {
  if (!credit && !sourceUrl) return null
  return (
    <p className="media-credit">
      {credit}
      {sourceUrl && (
        <>
          {credit ? ' · ' : ''}
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            Nguồn
          </a>
        </>
      )}
    </p>
  )
}

export function MediaBlock({ title, description, children, className = '' }) {
  return (
    <div className={`media-block reveal ${className}`.trim()}>
      {title && <h3 className="media-block-title">{title}</h3>}
      {description && <p className="media-block-desc">{description}</p>}
      {children}
    </div>
  )
}

export function ComparePair({ title, description, left, right }) {
  return (
    <MediaBlock title={title} description={description} className="media-block--compare">
      <div className="compare-grid">
        <CompareSide era="Thời xưa" {...left} />
        <CompareSide era="Thời nay" {...right} />
      </div>
    </MediaBlock>
  )
}

function CompareSide({ era, src, alt, caption, credit, sourceUrl }) {
  return (
    <figure className="compare-side">
      <span className="compare-era">{era}</span>
      <div className="compare-img-wrap">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
      <figcaption>
        {caption && <strong className="compare-caption">{caption}</strong>}
        <MediaCredit credit={credit} sourceUrl={sourceUrl} />
      </figcaption>
    </figure>
  )
}

export function MediaFigure({ title, src, alt, caption, credit, sourceUrl, wide = false }) {
  return (
    <figure className={`media-figure ${wide ? 'media-figure--wide' : ''}`.trim()}>
      {title && <h4 className="media-figure-title">{title}</h4>}
      <div className="media-figure-img-wrap">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
      <figcaption>
        {caption && <span className="media-figure-caption">{caption}</span>}
        <MediaCredit credit={credit} sourceUrl={sourceUrl} />
      </figcaption>
    </figure>
  )
}

export function MediaGrid({ children, columns = 2 }) {
  return (
    <div className={`media-grid media-grid--${columns}`}>
      {children}
    </div>
  )
}
