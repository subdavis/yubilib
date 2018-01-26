module.exports = function() {

	var my = {};

	const RESP_TIMEOUT_WAIT_MASK	= 0x1f // Mask to get timeout value
	const RESP_TIMEOUT_WAIT_FLAG	= 0x20 // Waiting for timeout operation - seconds left in lower 5 bits
	const RESP_PENDING_FLAG	= 0x40 // Response pending flag
	const SLOT_WRITE_FLAG		= 0x80 // Write flag - set by app - cleared by device
	const SHA1_MAX_BLOCK_SIZE	= 64   // Max size of input SHA1 block
	const SHA1_DIGEST_SIZE	= 20   // Size of SHA1 digest = 160 bits
	const OTP_CHALRESP_SIZE	= 16   // Number of bytes returned for an Yubico-OTP challenge (not from ykdef.h)
	const UID_SIZE		= 6    // Size of secret ID field
	const FEATURE_RPT_SIZE = 0x10

	const SLOT = {
		CONFIG               : 0x01, // First (default / V1) configuration
		CONFIG2              : 0x03, // Second (V2) configuration
		UPDATE1              : 0x04, // Update slot 1
		UPDATE2              : 0x05, // Update slot 2
		SWAP                 : 0x06, // Swap slot 1 and 2
		NDEF                 : 0x08, // Write NDEF record
		NDEF2                : 0x09, // Write NDEF record for slot 2
		DEVICE_SERIAL        : 0x10, // Device serial number
		DEVICE_CONFIG        : 0x11, // Write device configuration record
		SCAN_MAP             : 0x12, // Write scancode map
		YK4_CAPABILITIES     : 0x13, // Read YK4 capabilities list
		CHAL_OTP1            : 0x20, // Write 6 byte challenge to slot 1, get Yubico OTP response
		CHAL_OTP2            : 0x28, // Write 6 byte challenge to slot 2, get Yubico OTP response
		CHAL_HMAC1           : 0x30, // Write 64 byte challenge to slot 1, get HMAC-SHA1 response
		CHAL_HMAC2           : 0x38  // Write 64 byte challenge to slot 2, get HMAC-SHA1 response
	}

	const MODE = {
		OTP                  : 0x00, // OTP only
		CCID                 : 0x01, // CCID only, no eject
		OTP_CCID             : 0x02, // OTP + CCID composite
		U2F                  : 0x03, // U2F mode
		OTP_U2F              : 0x04, // OTP + U2F composite
		U2F_CCID             : 0x05, // U2F + U2F composite
		OTP_U2F_CCID         : 0x06, // OTP + U2F + CCID composite
		MASK                 : 0x07, // Mask for mode bits
		FLAG_EJECT           : 0x80  // CCID
	}

	const HID = {
		USB_TYPE_CLASS         : 0x01 << 5,
		USB_RECIP_INTERFACE    : 0x01,
		USB_ENDPOINT_IN        : 0x80,
		USB_ENDPOINT_OUT       : 0x00,

		HID_GET_REPORT         : 0x01,
		HID_SET_REPORT         : 0x09,

		USB_TIMEOUT_MS         : 2000,

		FEATURE_RPT_SIZE       : 8,
		REPORT_TYPE_FEATURE    : 0x03,
	}

	my.ChallengResponse = (data) => {

	}

	/* Write a YubiKeyFrame to the USB HID. Includes polling for 
	YubiKey readiness before each write. */
	_write = (frame) => {
		/* for feature_report in frame
					waitfor clear
					write report
				endfor
		*/

		// Send feature report
		raw_write = (data) => {

		}


	}

	/* Chop up the data into parts that fits into the payload of a
	feature report. Set the sequence number | 0x80 in the end
	of the feature report. When the Yubikey has processed it,
	it will clear this byte, signaling that the next part can be
	sent */
	_write_config = (slot, config) => {

	}

	/* Wait for a response to become available and read it */
	_read_from_key = () => {

	}

	/* Wait for the YubiKey to turn OFF the bits in 'mask' in 
	status responses.  

	Return last 8 bytes read */
	_waitfor_set = () => {

	}

	/* Wait for the YubiKey to turn OFF the bits in 'mask' in 
	status responses. 

	Return last 8 bytes read */
	_watifor_clear = () => {

	}
}