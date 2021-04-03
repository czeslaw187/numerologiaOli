<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit539b50d2bcb2171e8cb77eccac6dfade
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Worldpay\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Worldpay\\' => 
        array (
            0 => __DIR__ . '/..' . '/worldpay/worldpay-lib-php/lib',
        ),
    );

    public static $prefixesPsr0 = array (
        'M' => 
        array (
            'Monolog' => 
            array (
                0 => __DIR__ . '/..' . '/monolog/monolog/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit539b50d2bcb2171e8cb77eccac6dfade::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit539b50d2bcb2171e8cb77eccac6dfade::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit539b50d2bcb2171e8cb77eccac6dfade::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit539b50d2bcb2171e8cb77eccac6dfade::$classMap;

        }, null, ClassLoader::class);
    }
}
