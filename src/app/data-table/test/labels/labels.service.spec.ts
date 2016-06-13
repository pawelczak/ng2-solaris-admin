import {LabelsService} from '../../src/labels/labels.service';

describe('LabelsService', () => {


    let labelsService: LabelsService;

    beforeEach(() => {
        labelsService = new LabelsService();
    });

    it('should have method defined', () => {

        // assert
        expect(labelsService.getLabels).toBeDefined();
        expect(labelsService.setLabels).toBeDefined();
        expect(labelsService.reset).toBeDefined();
    });

    it('should have default values', () => {

        // assert
        expect(labelsService.getLabels()).toBeDefined();
    });

    it('should allow to reset labels', () => {

        // given
        let givenLabels = {
            translation: 'from polish'
        };

        // execute
        labelsService.reset(givenLabels);

        // assert
        expect(labelsService.getLabels()).toBe(givenLabels);
    });

    it('should allow to merge labels', () => {

        // given
        let givenLabels = {
            newTranslation: 'translation1'
        },
        givenDefaultLabels = {
            trans: 'translation2'
        };
        labelsService.reset(givenDefaultLabels);

        // execute
        labelsService.setLabels(givenLabels);

        // assert
        expect(labelsService.getLabels().newTranslation).toBe('translation1');
        expect(labelsService.getLabels().trans).toBe('translation2');
    });
});
