(function() {var implementors = {};
implementors["byteorder"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='byteorder/enum.Error.html' title='byteorder::Error'>Error</a>",];implementors["log"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='log/struct.SetLoggerError.html' title='log::SetLoggerError'>SetLoggerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='log/struct.ShutdownLoggerError.html' title='log::ShutdownLoggerError'>ShutdownLoggerError</a>",];implementors["libc"] = [];implementors["rustc_serialize"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/base64/enum.FromBase64Error.html' title='rustc_serialize::base64::FromBase64Error'>FromBase64Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/hex/enum.FromHexError.html' title='rustc_serialize::hex::FromHexError'>FromHexError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>StdError</a> for <a class='enum' href='rustc_serialize/json/enum.DecoderError.html' title='rustc_serialize::json::DecoderError'>DecoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>StdError</a> for <a class='enum' href='rustc_serialize/json/enum.ParserError.html' title='rustc_serialize::json::ParserError'>ParserError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>StdError</a> for <a class='enum' href='rustc_serialize/json/enum.EncoderError.html' title='rustc_serialize::json::EncoderError'>EncoderError</a>",];implementors["num_bigint"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='num_bigint/enum.ParseBigIntError.html' title='num_bigint::ParseBigIntError'>ParseBigIntError</a>",];implementors["num_rational"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='num_rational/struct.ParseRatioError.html' title='num_rational::ParseRatioError'>ParseRatioError</a>",];implementors["num"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='num_rational/struct.ParseRatioError.html' title='num_rational::ParseRatioError'>ParseRatioError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/base64/enum.FromBase64Error.html' title='rustc_serialize::base64::FromBase64Error'>FromBase64Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/hex/enum.FromHexError.html' title='rustc_serialize::hex::FromHexError'>FromHexError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/json/enum.DecoderError.html' title='rustc_serialize::json::DecoderError'>DecoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/json/enum.ParserError.html' title='rustc_serialize::json::ParserError'>ParserError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/json/enum.EncoderError.html' title='rustc_serialize::json::EncoderError'>EncoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='num_bigint/enum.ParseBigIntError.html' title='num_bigint::ParseBigIntError'>ParseBigIntError</a>",];implementors["enum_primitive"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='num_bigint/enum.ParseBigIntError.html' title='num_bigint::ParseBigIntError'>ParseBigIntError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='num_rational/struct.ParseRatioError.html' title='num_rational::ParseRatioError'>ParseRatioError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/base64/enum.FromBase64Error.html' title='rustc_serialize::base64::FromBase64Error'>FromBase64Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/hex/enum.FromHexError.html' title='rustc_serialize::hex::FromHexError'>FromHexError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/json/enum.DecoderError.html' title='rustc_serialize::json::DecoderError'>DecoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/json/enum.ParserError.html' title='rustc_serialize::json::ParserError'>ParserError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/json/enum.EncoderError.html' title='rustc_serialize::json::EncoderError'>EncoderError</a>",];implementors["nix"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='nix/enum.Errno.html' title='nix::Errno'>Errno</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='nix/enum.Error.html' title='nix::Error'>Error</a>",];implementors["time"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='time/struct.OutOfRangeError.html' title='time::OutOfRangeError'>OutOfRangeError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='time/enum.ParseError.html' title='time::ParseError'>ParseError</a>",];implementors["mio"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='nix/errno/consts/enum.Errno.html' title='nix::errno::consts::Errno'>Errno</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='nix/enum.Error.html' title='nix::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='log/struct.SetLoggerError.html' title='log::SetLoggerError'>SetLoggerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='log/struct.ShutdownLoggerError.html' title='log::ShutdownLoggerError'>ShutdownLoggerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='time/duration/struct.OutOfRangeError.html' title='time::duration::OutOfRangeError'>OutOfRangeError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='time/enum.ParseError.html' title='time::ParseError'>ParseError</a>","impl&lt;M:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='mio/enum.NotifyError.html' title='mio::NotifyError'>NotifyError</a>&lt;M&gt;",];implementors["zookeeper"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='time/duration/struct.OutOfRangeError.html' title='time::duration::OutOfRangeError'>OutOfRangeError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='time/enum.ParseError.html' title='time::ParseError'>ParseError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='log/struct.SetLoggerError.html' title='log::SetLoggerError'>SetLoggerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='log/struct.ShutdownLoggerError.html' title='log::ShutdownLoggerError'>ShutdownLoggerError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='num_bigint/enum.ParseBigIntError.html' title='num_bigint::ParseBigIntError'>ParseBigIntError</a>","impl&lt;M&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='mio/notify/enum.NotifyError.html' title='mio::notify::NotifyError'>NotifyError</a>&lt;M&gt; <span class='where'>where M: <a class='trait' href='https://doc.rust-lang.org/nightly/core/any/trait.Any.html' title='core::any::Any'>Any</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='struct' href='num_rational/struct.ParseRatioError.html' title='num_rational::ParseRatioError'>ParseRatioError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/base64/enum.FromBase64Error.html' title='rustc_serialize::base64::FromBase64Error'>FromBase64Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/hex/enum.FromHexError.html' title='rustc_serialize::hex::FromHexError'>FromHexError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/json/enum.DecoderError.html' title='rustc_serialize::json::DecoderError'>DecoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/json/enum.ParserError.html' title='rustc_serialize::json::ParserError'>ParserError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='rustc_serialize/json/enum.EncoderError.html' title='rustc_serialize::json::EncoderError'>EncoderError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='nix/errno/consts/enum.Errno.html' title='nix::errno::consts::Errno'>Errno</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='nix/enum.Error.html' title='nix::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='byteorder/new/enum.Error.html' title='byteorder::new::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/error/trait.Error.html' title='std::error::Error'>Error</a> for <a class='enum' href='zookeeper/enum.ZkError.html' title='zookeeper::ZkError'>ZkError</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()