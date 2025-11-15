<?php

declare( strict_types=1 );

namespace MediaWiki\Skins\Citizen\Components;

use MessageLocalizer;

/**
 * CitizenComponentFooter component
 */
class CitizenComponentFooter implements CitizenComponent {

	public function __construct(
		private readonly MessageLocalizer $localizer,
		private readonly array $footerData
	) {
	}

	public function getTemplateData(): array {
		$localizer = $this->localizer;
		$footerData = $this->footerData;

		return $footerData;
	}
}
