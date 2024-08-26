## Changelog

## [0.1.3] - 2024-08-26

### Added
- **TypeScript Support**: Full TypeScript support has been integrated, ensuring type safety and better development experience.

### Changed
- **Optimized Codebase**: Reduced the overall code size while improving performance, resulting in a more efficient directive with faster execution times.
- **Extended Animation Directions**: Expanded the available animation directions to include more options like `left-top`, `right-top`, `left-bottom`, and `right-bottom` for enhanced customization.
- **Custom Duration Option**: Added a customizable `duration` option, allowing for precise control over the length of animations.

### Fixed
- **Minor Bug Fixes**: Addressed minor bugs to enhance the stability and reliability of the scroll reveal functionality.
- **In View Animation**: When the content is not in view and after it is in view the same animation was applied now has been fixed 


### [0.1.2] - 2024-08-24


### [0.1.1] - 2024-08-24

#### Added
- **Rotation Support**: Added the ability to rotate elements by specifying a `rotate` value in degrees. Supports both positive and negative values.
- **Delay Option**: Introduced a `delay` option to allow for delayed animation starts. The delay is specified in milliseconds.
- **Customizable Directions**: Enhanced direction options to include `top`, `bottom`, `left`, and `right` for more flexible animations.
- **Automatic Cleanup**: Implemented automatic cleanup of event listeners when elements are unmounted, preventing potential memory leaks.

#### Changed
- **Improved Documentation**: Updated the README to include detailed instructions on using the new features and options.
- **Simplified Directive Usage**: Simplified the directive's API to make it more intuitive and easy to use.

#### Fixed
- **Element Rendering Issue**: Fixed an issue where elements were not rendering on the first screen due to an override property. This ensures that elements now correctly appear when they first enter the viewport.

### [0.1.0] - 2024-08-10
- Initial release of `vue-scroll-ease` with basic scroll reveal functionality and customizable animation directions.
